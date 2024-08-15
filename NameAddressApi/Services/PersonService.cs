using NameAddressApi.Models;

namespace NameAddressApi.Services
{
    public class PersonService : IPersonService
    {
        public Person SavePerson(Person person)
        {
            if (string.IsNullOrEmpty(person.Name) || string.IsNullOrEmpty(person.Address))
            {
                throw new ArgumentException("Name and Address cannot be empty.");
            }

            return person;
        }
    }
}
