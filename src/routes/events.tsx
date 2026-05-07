import { createFileRoute } from '@tanstack/react-router'
import EventsPage from '../components/EventsPage'

export const Route = createFileRoute('/events')({
  component: EventsPage,
})
