using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Restaurant.Default;

[ConnectionKey("Default"), Module("Default"), TableName("Brand")]
[DisplayName("Brand"), InstanceName("Brand")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class BrandRow : Row<BrandRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Brand Name"), Size(200), QuickSearch, NameProperty]
    public string BrandName { get => fields.BrandName[this]; set => fields.BrandName[this] = value; }

    [DisplayName("Photo")]
    public string Photo { get => fields.Photo[this]; set => fields.Photo[this] = value; }

    [DisplayName("Phone Number")]
    public string PhoneNember { get => fields.PhoneNember[this]; set => fields.PhoneNember[this] = value; }

    [DisplayName("Whtas App")]
    public string WhtasApp { get => fields.WhtasApp[this]; set => fields.WhtasApp[this] = value; }

    [DisplayName("Face Book")]
    public string FaceBook { get => fields.FaceBook[this]; set => fields.FaceBook[this] = value; }

    [DisplayName("Twitter")]
    public string Twitter { get => fields.Twitter[this]; set => fields.Twitter[this] = value; }

    [DisplayName("Instagram")]
    public string Instagram { get => fields.Instagram[this]; set => fields.Instagram[this] = value; }

    [DisplayName("Tiktok")]
    public string Tiktok { get => fields.Tiktok[this]; set => fields.Tiktok[this] = value; }

    [DisplayName("Telegram")]
    public string Telegram { get => fields.Telegram[this]; set => fields.Telegram[this] = value; }

    [DisplayName("Description")]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField BrandName;
        public StringField Photo;
        public StringField PhoneNember;
        public StringField WhtasApp;
        public StringField FaceBook;
        public StringField Twitter;
        public StringField Instagram;
        public StringField Tiktok;
        public StringField Telegram;
        public StringField Description;

    }
}