import reflex as rx


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.text("Hola Reflex!", color="blue",
                   font_size='1.5em', font_family='Arial',
                   font_weight='bold',margin='auto')


app = rx.App()
app.add_page(index)
app.compile()
