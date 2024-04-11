using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Restaurant.Models
{
    public partial class locantaContext : DbContext
    {
        public locantaContext()
        {
        }

        public locantaContext(DbContextOptions<locantaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Brand> Brands { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<CategoryMeal> CategoryMeals { get; set; }
        public virtual DbSet<Exception> Exceptions { get; set; }
        public virtual DbSet<Item> Items { get; set; }
        public virtual DbSet<Language> Languages { get; set; }
        public virtual DbSet<Meal> Meals { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<RolePermission> RolePermissions { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserPermission> UserPermissions { get; set; }
        public virtual DbSet<UserPreference> UserPreferences { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }
        public virtual DbSet<VersionInfo> VersionInfos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("workstation id=Locanta.mssql.somee.com;packet size=4096;user id=SafaAlaa_SQLLogin_1;pwd=7xyvb9gg68;data source=Locanta.mssql.somee.com;persist security info=False;initial catalog=Locanta;TrustServerCertificate=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Brand>(entity =>
            {
                entity.ToTable("Brand");

                entity.Property(e => e.BrandName).HasMaxLength(200);
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryName).HasMaxLength(200);
            });

            modelBuilder.Entity<CategoryMeal>(entity =>
            {
                entity.Property(e => e.CategoryMealsName).HasMaxLength(200);
            });

            modelBuilder.Entity<Exception>(entity =>
            {
                entity.HasIndex(e => new { e.ApplicationName, e.DeletionDate, e.CreationDate }, "IX_Exceptions_App_Del_Cre");

                entity.HasIndex(e => new { e.Guid, e.ApplicationName, e.DeletionDate, e.CreationDate }, "IX_Exceptions_GUID_App_Del_Cre");

                entity.HasIndex(e => new { e.ErrorHash, e.ApplicationName, e.CreationDate, e.DeletionDate }, "IX_Exceptions_Hash_App_Cre_Del");

                entity.Property(e => e.ApplicationName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.DeletionDate).HasColumnType("datetime");

                entity.Property(e => e.DuplicateCount).HasDefaultValueSql("((1))");

                entity.Property(e => e.Guid).HasColumnName("GUID");

                entity.Property(e => e.Host).HasMaxLength(100);

                entity.Property(e => e.Httpmethod)
                    .HasMaxLength(10)
                    .HasColumnName("HTTPMethod");

                entity.Property(e => e.Ipaddress)
                    .HasMaxLength(40)
                    .HasColumnName("IPAddress");

                entity.Property(e => e.IsProtected)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.MachineName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Message).HasMaxLength(1000);

                entity.Property(e => e.Source).HasMaxLength(100);

                entity.Property(e => e.Sql).HasColumnName("SQL");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Url).HasMaxLength(500);
            });

            modelBuilder.Entity<Item>(entity =>
            {
                entity.ToTable("Item");

                entity.Property(e => e.ItemName).HasMaxLength(200);

                entity.HasOne(d => d.Meals)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.MealsId)
                    .HasConstraintName("FK_Item_Meals");
            });

            modelBuilder.Entity<Language>(entity =>
            {
                entity.HasIndex(e => e.LanguageId, "IX_Languages_LanguageId")
                    .IsUnique();

                entity.Property(e => e.LanguageId)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.LanguageName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Meal>(entity =>
            {
                entity.Property(e => e.Currency).HasMaxLength(50);

                entity.Property(e => e.MealsName).HasMaxLength(200);

                entity.Property(e => e.Price).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.PriceBefor).HasColumnType("decimal(18, 0)");

                entity.HasOne(d => d.CategoryMeals)
                    .WithMany(p => p.Meals)
                    .HasForeignKey(d => d.CategoryMealsId)
                    .HasConstraintName("FK_Meals_CategoryMeals");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");

                entity.Property(e => e.Currency).HasMaxLength(50);

                entity.Property(e => e.Price).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.PriceBefor).HasColumnType("decimal(18, 0)");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_Product_Category");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<RolePermission>(entity =>
            {
                entity.HasIndex(e => new { e.RoleId, e.PermissionKey }, "UQ_RolePerm_RoleId_PermKey")
                    .IsUnique();

                entity.Property(e => e.PermissionKey)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.RolePermissions)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RolePermissions_RoleId");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Username, "IX_Users_Username")
                    .IsUnique();

                entity.Property(e => e.DisplayName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.InsertDate).HasColumnType("datetime");

                entity.Property(e => e.IsActive).HasDefaultValueSql("((1))");

                entity.Property(e => e.LastDirectoryUpdate).HasColumnType("datetime");

                entity.Property(e => e.PasswordHash)
                    .IsRequired()
                    .HasMaxLength(86);

                entity.Property(e => e.PasswordSalt)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Source)
                    .IsRequired()
                    .HasMaxLength(4);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.Property(e => e.UserImage).HasMaxLength(100);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<UserPermission>(entity =>
            {
                entity.HasIndex(e => new { e.UserId, e.PermissionKey }, "UQ_UserPerm_UserId_PermKey")
                    .IsUnique();

                entity.Property(e => e.Granted)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.PermissionKey)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserPermissions)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserPermissions_UserId");
            });

            modelBuilder.Entity<UserPreference>(entity =>
            {
                entity.HasIndex(e => new { e.UserId, e.PreferenceType, e.Name }, "IX_UserPref_UID_PrefType_Name")
                    .IsUnique();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.PreferenceType)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<UserRole>(entity =>
            {
                entity.HasIndex(e => new { e.RoleId, e.UserId }, "IX_UserRoles_RoleId_UserId");

                entity.HasIndex(e => new { e.UserId, e.RoleId }, "UQ_UserRoles_UserId_RoleId")
                    .IsUnique();

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.UserRoles)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserRoles_RoleId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserRoles)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserRoles_UserId");
            });

            modelBuilder.Entity<VersionInfo>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("VersionInfo");

                entity.HasIndex(e => e.Version, "UC_Version")
                    .IsUnique()
                    .IsClustered();

                entity.Property(e => e.AppliedOn).HasColumnType("datetime");

                entity.Property(e => e.Description).HasMaxLength(1024);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
