import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";
import moment from "moment";
import 'moment/locale/fr';


const locales = {
    "fr": require("date-fns/locale/fr"),
};
const messages = {
  allDay: 'journée',
  previous: 'précédent',
  next: 'suivant',
  today: 'aujourd\'hui',
  month: 'mois',
  week: 'semaine',
  day: 'jour',
  agenda: 'Agenda',
  date: 'date',
  time: 'heure',
  event: 'événement', // Or anything you want
  monday: 'lundi',
  showMore: total => `+ ${total} événement(s) supplémentaire(s)`
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const events = [
    {
        title: "Vente paniers fruits de saison",
        allDay: true,
        start: new Date(2021, 7, 1),
        end: new Date(2021, 7, 1),
    },
    {
        title: "Vente paniers légumes de saison",
        start: new Date(2021, 7, 7),
        end: new Date(2021, 7, 7),
    },
    {
        title: "Réunion informative sur l'AMAP",
        start: new Date(2021, 7, 20),
        end: new Date(2021, 7, 23),
    },
];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <section className="calendrier">
            <h1>Calendrier</h1>
            <h2>Ajouter un nouveau panier</h2>
            <div>
                <input type="text" placeholder="Ajouter un panier" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker messages={messages} placeholderText="Date de départ" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker messages={messages} placeholderText="Date de fin" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Ajouter un panier
                </button>
            </div>
            <Calendar messages={messages} localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </section>
    );
}

export default App;
