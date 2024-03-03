namespace Cozy_Haven.Exceptions
{
    public class NoRoomFoundException:Exception
    {
        string message;
        public NoRoomFoundException()
        {
            message = "No room found";
        }
        public NoRoomFoundException(string availability)
        {
            message = availability;
        }
        public override string Message => message;
    }
}
