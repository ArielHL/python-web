import reflex as rx 
from own.components.link_button import link_button


def links () -> rx.Component:
    return rx.vstack(
        link_button(text='Twitch',url='https://www.twitch.tv/mouredev'),
        link_button(text='Youtube',url='https://www.youtube.com/@mouredev'),
        link_button(text='Youtube (canal secundario)',url='https://www.youtube.com/@mouredevtv'),
        link_button(text='Discord',url='https://discord.gg/mouredev'),
     
        
        
        
        
        
    )