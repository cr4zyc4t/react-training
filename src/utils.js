import { useState, useEffect } from "react";

export function useTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, []);

  return time;
}

export function useMousePos() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      // let eventDoc = null;
      // let doc = null;
      // let body = null;

      event = event || window.event; // IE-ism

      // If pageX/Y aren't available and clientX/Y are,
      // calculate pageX/Y - logic taken from jQuery.
      // (This is to support old IE)
      if (event.pageX == null && event.clientX != null) {
        const eventDoc = (event.target && event.target.ownerDocument) || document;
        const doc = eventDoc.documentElement;
        const body = eventDoc.body;

        event.pageX = event.clientX +
          ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
          ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
        event.pageY = event.clientY +
          ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
          ((doc && doc.clientTop) || (body && body.clientTop) || 0);
      }

      setPos({
        x: event.pageX,
        y: event.pageY,
      })
    }
    document.addEventListener("mousemove", handleMouseMove)

    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return pos;
}