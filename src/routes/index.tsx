import { createFileRoute } from "@tanstack/react-router";
import LandingHub from "../components/LandingHub";

export const Route = createFileRoute("/")({
  component: LandingHub,
});
