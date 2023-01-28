using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using API_CareerZONE.Models;
using API_CareerZONE.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<UsersContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("UsersContext") ?? throw new InvalidOperationException("Connection string 'UsersContext' not found.")));
builder.Services.AddDbContext<JobsContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("JobsContext") ?? throw new InvalidOperationException("Connection string 'JobsContext' not found.")));
builder.Services.AddDbContext<BlogPostsContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BlogPostsContext") ?? throw new InvalidOperationException("Connection string 'BlogPostsContext' not found.")));

    builder.Services.AddCors(options =>
    {
        options.AddPolicy("MyPolicy",
        builder =>
        {
            builder.WithOrigins("http://127.0.0.1:5500")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
    });
    builder.Services.AddControllers();


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//using (var scope = app.Services.CreateScope())
//{
//    var services = scope.ServiceProvider;

//    var context = services.GetRequiredService<JobsContext>();
//    //context.Database.EnsureCreated();
//    //context.Database.EnsureDeleted();
//    //DbInitializer.Initialize(context);

//    //var context2 = services.GetRequiredService<BlogPostsContext>();
//    //context.Database.EnsureCreated();
//    //DbInitializer.Initialize(context);
//}
app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

//app.MapJobEndpoints();

app.Run();
