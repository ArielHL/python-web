import reflex as rx 
from own.styles import styles


def info_text(title:str,body:str) -> rx.Component:
    return rx.box(
        rx.span(
            title, font_weight='bold',color='lightblue',margin_right=styles.Size.SMALL.value),  
            body,font_size=styles.Size.MEDIUM.value
    )
      
      
      
      
