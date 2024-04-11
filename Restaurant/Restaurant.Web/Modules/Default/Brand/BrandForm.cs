using Serenity.ComponentModel;

namespace Restaurant.Default.Forms;

[FormScript("Default.Brand")]
[BasedOnRow(typeof(BrandRow), CheckNames = true)]
public class BrandForm
{
    public string BrandName { get; set; }
    public string Photo { get; set; }
    public string PhoneNember { get; set; }
    public string WhtasApp { get; set; }
    public string FaceBook { get; set; }
    public string Twitter { get; set; }
    public string Instagram { get; set; }
    public string Tiktok { get; set; }
    public string Telegram { get; set; }
    public string Description { get; set; }
}