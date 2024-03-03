using System.ComponentModel.DataAnnotations;

namespace Cozy_Haven.Models.DTOs
{
    public class UpdateUserDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ContactNumber { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address {  get; set; }
        public string Gender { get; set; }  
    }
}