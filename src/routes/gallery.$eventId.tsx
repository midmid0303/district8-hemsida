import { createFileRoute } from "@tanstack/react-router";
import EventGalleryPage from "../components/EventGalleryPage";

export const Route = createFileRoute("/gallery/$eventId")({
  component: EventGalleryPage,
});
