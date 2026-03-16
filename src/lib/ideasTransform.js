// Shared motion values for the Ideas canvas pan/zoom transform.
// Both IdeasCanvas (writer) and LivePresence (reader) import from here so
// cursor positions can be converted between canvas-space and viewport-space
// without prop-drilling or context.
import { motionValue } from "motion/react";

export const canvasPanX = motionValue(0);
export const canvasPanY = motionValue(0);
export const canvasZoom = motionValue(1);
