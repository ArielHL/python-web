import reflex as rx 
import datetime
from own.styles import styles


year = datetime.datetime.today().year

def footer() -> rx.Component:
    return rx.box(

                rx.hstack(
                    rx.image(src='favicon.ico',width=50,height=50),
                    rx.vstack(
                        rx.link(f'© 2014-{year} MOUREDEV BY BRAIS MOURE V3.',
                                href='https://www.mouredev.com',
                                is_external=True,
                                font_size=styles.Size.DEFAULT.value), 
                        rx.text(
                            'BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.',
                            font_size=styles.Size.DEFAULT.value,
                            margin_top='0px !important')
                            ),
                
                    display='flex',
                    justify_content='center',
                    align_items='center',
                    margin_y=styles.Size.LARGE.value,
                    background_color='lightblue',
                    width='100%'
            
                    
            )
    )