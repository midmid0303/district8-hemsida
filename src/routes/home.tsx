import { createFileRoute } from "@tanstack/react-router";
import PageFlow from "../components/PageFlow";

export const Route = createFileRoute("/home")({
  component: PageFlow,
});
