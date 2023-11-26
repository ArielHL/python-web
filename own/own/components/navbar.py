import reflex as rx 


def navbar() -> rx.Component:
    return rx.hstack(
        rx.text(
            "mouredev",
            height='40px',
            color='white'
            ),
        position='sticky',
        bg='blue',
        width='100%',
        padding='10px',
        z_index='100'
    )