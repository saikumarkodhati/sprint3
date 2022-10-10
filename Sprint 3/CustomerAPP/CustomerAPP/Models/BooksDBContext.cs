using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace CustomerAPP.Models
{
    public partial class BooksDBContext : DbContext
    {
        public BooksDBContext()
        {
        }

        public BooksDBContext(DbContextOptions<BooksDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CreateBook> CreateBooks { get; set; }
        public virtual DbSet<SearchBook> SearchBooks { get; set; }
        public virtual DbSet<TblLogin> TblLogins { get; set; }
        public virtual DbSet<UserDetail> UserDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=tcp:dbbook.database.windows.net,1433;Initial Catalog=BooksDB;Persist Security Info=False;User ID=books;Password=SAIkumar21@!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<CreateBook>(entity =>
            {
                entity.ToTable("CreateBook");

                entity.Property(e => e.Active).IsUnicode(false);

                entity.Property(e => e.Author).IsUnicode(false);

                entity.Property(e => e.Category).IsUnicode(false);

                entity.Property(e => e.Content).IsUnicode(false);

                entity.Property(e => e.Image).IsUnicode(false);

                entity.Property(e => e.Price).IsUnicode(false);

                entity.Property(e => e.Publisher).IsUnicode(false);

                entity.Property(e => e.ReleasedDate).IsUnicode(false);

                entity.Property(e => e.Title).IsUnicode(false);
            });

            modelBuilder.Entity<SearchBook>(entity =>
            {
                entity.ToTable("SearchBook");

                entity.Property(e => e.Author).IsUnicode(false);

                entity.Property(e => e.Publisher).IsUnicode(false);

                entity.Property(e => e.ReleasedDate).IsUnicode(false);

                entity.Property(e => e.Title).IsUnicode(false);
            });

            modelBuilder.Entity<TblLogin>(entity =>
            {
                entity.ToTable("TblLogin");

                entity.Property(e => e.Password).IsUnicode(false);

                entity.Property(e => e.Type).IsUnicode(false);

                entity.Property(e => e.UserName).IsUnicode(false);
            });

            modelBuilder.Entity<UserDetail>(entity =>
            {
                entity.ToTable("UserDetail");

                entity.Property(e => e.Author).IsUnicode(false);

                entity.Property(e => e.Block).HasColumnName("block");

                entity.Property(e => e.Cardholdername)
                    .IsUnicode(false)
                    .HasColumnName("cardholdername");

                entity.Property(e => e.Cardnumber)
                    .IsUnicode(false)
                    .HasColumnName("cardnumber");

                entity.Property(e => e.Category).IsUnicode(false);

                entity.Property(e => e.Content).IsUnicode(false);

                entity.Property(e => e.Cvv)
                    .IsUnicode(false)
                    .HasColumnName("cvv");

                entity.Property(e => e.Expiresdate)
                    .IsUnicode(false)
                    .HasColumnName("expiresdate");

                entity.Property(e => e.Price).IsUnicode(false);

                entity.Property(e => e.Publisher).IsUnicode(false);

                entity.Property(e => e.Title).IsUnicode(false);

                entity.Property(e => e.UserId).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
