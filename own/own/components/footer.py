import reflex as rx 
import datetime

year = datetime.datetime.today().year

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src='favicon.ico',width=100,height='auto'),
        rx.hstack(
            rx.link(f'© 2014-{year} MOUREDEV BY BRAIS MOURE V3.',
                    href='https://www.mouredev.com',
                    is_external=True), 
            rx.text('BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.')
        )
        
    )