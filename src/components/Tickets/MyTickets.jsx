import React from "react";
import ticket1 from "../../assets/images/ticket1.jpg";
import ticket2 from "../../assets/images/ticket2.png";
import ticket3 from "../../assets/images/ticket3.jpg";
import ticket4 from "../../assets/images/ticket-04.png";
import ticket5 from "../../assets/images/ticket5.png";

const MyTicketsPage = () => {
  // Sample ticket data
  const tickets = [
    {
      id: 1,
      eventName: "Awesome Concert",
      date: "2024-03-15",
      venue: "City Arena",
      ticketCode: "ABC123",
      ticketImage: ticket1,
    },
    {
      id: 2,
      eventName: "Tech Conference",
      date: "2024-04-20",
      venue: "Convention Center",
      ticketCode: "XYZ789",
      ticketImage: ticket3,
    },
    {
      id: 3,
      eventName: "Art Exhibition",
      date: "2024-05-10",
      venue: "Gallery Hall",
      ticketCode: "DEF456",
      ticketImage: ticket2,
    },
    {
      id: 4,
      eventName: "Fitness Expo",
      date: "2024-06-22",
      venue: "Fitness Center",
      ticketCode: "GHI789",
      ticketImage: ticket4,
    },
    {
      id: 5,
      eventName: "Food Festival",
      date: "2024-07-15",
      venue: "Culinary Square",
      ticketCode: "JKL012",
      ticketImage: ticket5,
    },
  ];

  return (
    <section>
      <div className="container mx-auto mt-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">My Tickets</h2>

        {tickets.length === 0 ? (
          <p className="text-gray-600">
            You haven't purchased any tickets yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <img
                    className="w-full h-32 object-cover mb-4 rounded-md"
                    src={ticket.ticketImage}
                    alt={ticket.eventName}
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {ticket.eventName}
                  </h3>
                  <p className="text-gray-500 mb-2">
                    {ticket.date} - {ticket.venue}
                  </p>
                  <p className="text-gray-700 mb-4">
                    Ticket Code: {ticket.ticketCode}
                  </p>
                </div>
                <button
                  className="btn text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                  onClick={() => handleTicketDetails(ticket.id)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyTicketsPage;
