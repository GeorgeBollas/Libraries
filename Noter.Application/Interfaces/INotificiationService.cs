using Noter.Application.Notifications.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Interfaces
{
    public interface INotificiationService
    {
        void Send(Message message);
    }
}
