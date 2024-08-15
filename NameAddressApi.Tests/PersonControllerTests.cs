using Moq;
using Microsoft.AspNetCore.Mvc;
using NameAddressApi.Controllers;
using NameAddressApi.Models;
using NameAddressApi.Services;

namespace NameAddressApi.Tests
{
    public class PersonControllerTests
    {
        private readonly Mock<IPersonService> _mockPersonService;
        private readonly PersonController _controller;

        public PersonControllerTests()
        {
            _mockPersonService = new Mock<IPersonService>();
            _controller = new PersonController(_mockPersonService.Object);
        }

        [Fact]
        public void SavePerson_ReturnsOkResult_WithCorrectData()
        {
            var person = new Person { Name = "John Doe", Address = "123 Main St" };
            _mockPersonService.Setup(service => service.SavePerson(person)).Returns(person);

            var result = _controller.SavePerson(person);

            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var returnedPerson = Assert.IsType<Person>(okResult.Value);
            Assert.Equal(person.Name, returnedPerson.Name);
            Assert.Equal(person.Address, returnedPerson.Address);
        }
    }
}
