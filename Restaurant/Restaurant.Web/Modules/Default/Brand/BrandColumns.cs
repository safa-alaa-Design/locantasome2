using Serenity.ComponentModel;
using System.ComponentModel;

namespace Restaurant.Default.Columns;

[ColumnsScript("Default.Brand")]
[BasedOnRow(typeof(BrandRow), CheckNames = true)]
public class BrandColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId")]
    public int Id { get; set; }
    [EditLink]
    public string BrandName { get; set; }
    [ImageViewerFormatter]
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