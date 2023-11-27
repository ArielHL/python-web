import reflex as rx 
from own.components.link_button import link_button
from own.components.title import title
from own.styles import styles   


def links () -> rx.Component:
    return rx.vstack(
        title('Comunidad'),
        link_button(title='Twitch', 
                    body='Live Streaming',
                    url='https://www.twitch.tv/mouredev'),
        link_button(title='Youtube',
                    body='Live Streaming',
                    url='https://www.youtube.com/@mouredev'),
        link_button(title='Youtube (canal secundario)',
                    body='Deferred Streaming',
                    url='https://www.youtube.com/@mouredevtv'),
        link_button(title='Discord', 
                    body='the communication',
                    url='https://discord.gg/mouredev'),
        
        title('Comunidad'),
        link_button(title='Twitch', 
                    body='Live Streaming',
                    url='https://www.twitch.tv/mouredev'),
        link_button(title='Youtube',
                    body='Live Streaming',
                    url='https://www.youtube.com/@mouredev'),
        link_button(title='Youtube (canal secundario)',
                    body='Deferred Streaming',
                    url='https://www.youtube.com/@mouredevtv'),
        link_button(title='Discord', 
                    body='the communication',
                    url='https://discord.gg/mouredev'),
        width='100%',
        spacing=styles.Size.DEFAULT.value,
        
    )