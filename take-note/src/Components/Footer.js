import React from 'react';
import take from '../image/take.png';
import './Footer.css'

export const Footer = () => {
    return (
        <footer className="under">
            <img className="logo" src={take} />
            <a href="#nuwNote"><img className="takes" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQwMS41MjI4OSA0MDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxsaW5lYXJHcmFkaWVudCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJhIj48c3RvcCBzdG9wLW9wYWNpdHk9IjEiIHN0b3AtY29sb3I9IiNlOWIwZDgiIG9mZnNldD0iMC4yNDY4MzQ3MTE4ODk0NjkwNyI+PC9zdG9wPjxzdG9wIHN0b3Atb3BhY2l0eT0iMSIgc3RvcC1jb2xvcj0iI2UxNjFiYiIgb2Zmc2V0PSIwLjUxNzIyMDk0OTY1MjQ0NTUiPjwvc3RvcD48c3RvcCBzdG9wLW9wYWNpdHk9IjEiIHN0b3AtY29sb3I9IiM3YjE4NzIiIG9mZnNldD0iMC43OTUzMzI1MDg0OTQzNjQiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJiIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC01NS4yMjggNDU4LjAxMjMzNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjQ1LjUyMyIgeDI9IjI0NS41MjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bGluazpocmVmPSIjYSIgeTE9IjQ2MCIgeTI9IjMyIj48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJjIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC01NS4yMjggNDU4LjAxMjMzNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzEwLjA4NCIgeDI9IjMxMC4wODQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bGluazpocmVmPSIjYSIgeTE9IjQ2MCIgeTI9IjMyIj48L2xpbmVhckdyYWRpZW50PjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM3MC41ODk4NDQgMjUwLjk3MjY1NmMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHY4OC43ODkwNjNjLS4wMTk1MzIgMTYuNTYyNS0xMy40Mzc1IDI5Ljk4NDM3NS0zMCAzMGgtMjgwLjU4OTg0NGMtMTYuNTYyNS0uMDE1NjI1LTI5Ljk4MDQ2OS0xMy40Mzc1LTMwLTMwdi0yNjAuNTg5ODQ0Yy4wMTk1MzEtMTYuNTU4NTk0IDEzLjQzNzUtMjkuOTgwNDY5IDMwLTMwaDg4Ljc4OTA2MmM1LjUyMzQzOCAwIDEwLTQuNDc2NTYzIDEwLTEwIDAtNS41MTk1MzEtNC40NzY1NjItMTAtMTAtMTBoLTg4Ljc4OTA2MmMtMjcuNjAxNTYyLjAzMTI1LTQ5Ljk2ODc1IDIyLjM5ODQzNy01MCA1MHYyNjAuNTkzNzVjLjAzMTI1IDI3LjYwMTU2MyAyMi4zOTg0MzggNDkuOTY4NzUgNTAgNTBoMjgwLjU4OTg0NGMyNy42MDE1NjItLjAzMTI1IDQ5Ljk2ODc1LTIyLjM5ODQzNyA1MC01MHYtODguNzkyOTY5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIgZmlsbD0idXJsKCNiKSIgZGF0YS1vcmlnaW5hbD0idXJsKCNiKSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM3Ni42Mjg5MDYgMTMuNDQxNDA2Yy0xNy41NzQyMTgtMTcuNTc0MjE4LTQ2LjA2NjQwNi0xNy41NzQyMTgtNjMuNjQwNjI1IDBsLTE3OC40MDYyNSAxNzguNDA2MjVjLTEuMjIyNjU2IDEuMjIyNjU2LTIuMTA1NDY5IDIuNzM4MjgyLTIuNTY2NDA2IDQuNDAyMzQ0bC0yMy40NjA5MzcgODQuNjk5MjE5Yy0uOTY0ODQ0IDMuNDcyNjU2LjAxNTYyNCA3LjE5MTQwNiAyLjU2MjUgOS43NDIxODcgMi41NTA3ODEgMi41NDY4NzUgNi4yNjk1MzEgMy41MjczNDQgOS43NDIxODcgMi41NjY0MDZsODQuNjk5MjE5LTIzLjQ2NDg0M2MxLjY2NDA2Mi0uNDYwOTM4IDMuMTc5Njg3LTEuMzQzNzUgNC40MDIzNDQtMi41NjY0MDdsMTc4LjQwMjM0My0xNzguNDEwMTU2YzE3LjU0Njg3NS0xNy41ODU5MzcgMTcuNTQ2ODc1LTQ2LjA1NDY4NyAwLTYzLjY0MDYyNXptLTIyMC4yNTc4MTIgMTg0LjkwNjI1IDE0Ni4wMTE3MTgtMTQ2LjAxNTYyNSA0Ny4wODk4NDQgNDcuMDg5ODQ0LTE0Ni4wMTU2MjUgMTQ2LjAxNTYyNXptLTkuNDA2MjUgMTguODc1IDM3LjYyMTA5NCAzNy42MjUtNTIuMDM5MDYzIDE0LjQxNzk2OXptMjI3LjI1NzgxMi0xNDIuNTQ2ODc1LTEwLjYwNTQ2OCAxMC42MDU0NjktNDcuMDkzNzUtNDcuMDkzNzUgMTAuNjA5Mzc0LTEwLjYwNTQ2OWM5Ljc2MTcxOS05Ljc2MTcxOSAyNS41ODk4NDQtOS43NjE3MTkgMzUuMzUxNTYzIDBsMTEuNzM4MjgxIDExLjczNDM3NWM5Ljc0NjA5NCA5Ljc3MzQzOCA5Ljc0NjA5NCAyNS41ODk4NDQgMCAzNS4zNTkzNzV6bTAgMCIgZmlsbD0idXJsKCNjKSIgZGF0YS1vcmlnaW5hbD0idXJsKCNjKSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" /></a>
        </footer>
    )
}