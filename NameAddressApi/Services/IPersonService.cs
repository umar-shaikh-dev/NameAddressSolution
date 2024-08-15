using NameAddressApi.Models;

namespace NameAddressApi.Services
{
    public interface IPersonService
    {
        Person SavePerson(Person person);
    }
}
