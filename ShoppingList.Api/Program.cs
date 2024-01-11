using System.Diagnostics.CodeAnalysis;
using ShoppingList.Repository;
using ShoppingList.Repository.Interfaces;
using ShoppingList.Services;
using ShoppingList.Services.Interfaces;

namespace ShoppingList.API
{
    public class Program
    {
        private static readonly string CorsPolicyName = "_MyCorsPolicy";
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddSingleton<IShoppingListRepository, ShoppingListRepository>();
            builder.Services.AddSingleton<IShoppingListService, ShoppingListService>();

            builder.Services.AddCors(o => o.AddPolicy(CorsPolicyName, builder =>
            {
                builder
                    .SetIsOriginAllowed(_ => true)
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials();
            }));

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors(CorsPolicyName);

            app.UseAuthorization();


            app.MapControllers();
            

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
