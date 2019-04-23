using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class AppEvent: Auditable
    {
        public int Id { get; set; }

        public DateTime EventTime { get; set; }

        public EventCategory EventCategory { get; set; }

        public string EventJson { get; set; }
    }

    public enum EventCategory
    {
        Command =1,
        ApplicationState =2, //starting, started, etc
        Exception =3,
    }
}
