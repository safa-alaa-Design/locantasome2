/** @jsxImportSource jsx-dom */
import { LoginForm, LoginRequest } from "@/ServerTypes/Membership";
import { Texts } from "@/ServerTypes/Texts";
import { PropertyPanel } from "@serenity-is/corelib";
import { ErrorHandling, format, getCookie, notifyError, parseQueryString, resolveUrl, serviceCall, tryGetText } from "@serenity-is/corelib";
import { AccountPanelTitle } from "../AccountPanelTitle";

export default function pageInit(opt?: { activated: string }) {
    var loginPanel = new LoginPanel($('#LoginPanel'));

    if (opt?.activated) {
        loginPanel.form.Username.value = opt.activated;
        loginPanel.form.Password.element.focus();
    }
}

class LoginPanel extends PropertyPanel<LoginRequest, any> {

    public readonly form = new LoginForm(this.idPrefix);

    protected getFormKey() { return LoginForm.formKey; }

    constructor(element: JQuery, options?: any) {
        super(element, options);
    }

    protected loginClick() {
        if (!this.validateForm())
            return;

        var request = this.getSaveEntity();

        serviceCall({
            url: resolveUrl('~/Account/Login'),
            request: request,
            onSuccess: () => {
                this.redirectToReturnUrl();
            },
            onError: response => {

                if (response?.Error?.Code === "RedirectUserTo") {
                    window.location.href = response.Error.Arguments;
                    return;
                }

                if (response?.Error?.Message?.length) {
                    notifyError(response.Error.Message);
                    this.form.Password.element.focus();

                    return;
                }

                ErrorHandling.showServiceError(response.Error);
            }
        });

    }

    protected getReturnUrl() {
        var q = parseQueryString();
        return q['returnUrl'] || q['ReturnUrl'];
    }

    protected redirectToReturnUrl() {
        var returnUrl = this.getReturnUrl();
        if (returnUrl && /^\//.test(returnUrl)) {
            var hash = window.location.hash;
            if (hash != null && hash != '#')
                returnUrl += hash;
            window.location.href = resolveUrl('~/Home/IndexHome');
        }
        else {
            window.location.href = resolveUrl('~/Home/IndexHome');
        }
    }

    protected renderContents() {
        const id = this.useIdPrefix();
        const myTexts = Texts.Forms.Membership.Login;
        this.element.empty().append(<>
            <AccountPanelTitle />
            <div class="s-Panel p-4">
                <h5 class="text-center my-4">{myTexts.LoginToYourAccount}</h5>
                <form id={id.Form} action="">
                    <div id={id.PropertyGrid}></div>
                    <div class="px-field">
                        <a class="float-end text-decoration-none" href={resolveUrl('~/Account/ForgotPassword')}>
                            {myTexts.ForgotPassword}
                        </a>
                    </div>
                    <div class="px-field">
                        <button id={id.LoginButton} type="submit" class="btn btn-primary my-3 w-100"
                            onClick={e => {
                                e.preventDefault();
                                this.loginClick();
                            }}>
                            {myTexts.SignInButton}
                        </button>
                    </div>
                </form>
            </div>
            <div class="text-center mt-2">
                <a class="text-decoration-none" href={resolveUrl('~/Account/SignUp')}>{myTexts.SignUpButton}</a>
            </div>
        </>);
    }
}