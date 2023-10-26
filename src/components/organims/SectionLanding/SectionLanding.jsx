import { Section } from '../../molecules/Section/Section'
import { Description, Title } from '../../atoms'
import { title } from '../../../theme'
export const SectionLanding = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px', padding: '40px', justifyContent: 'space-around' }}>


            <Section >
                <Title title={title} color={'secondary'} />
                <Description color={'silver'} text={"Hi I'm your trusted Frenchie"} />
            </Section>
            <Section>
                <img width={400} src={'https://i.pinimg.com/originals/38/f9/c6/38f9c66071b76b0690bdcfa79f3e383b.png'} />
            </Section>
            <Section>
                <iframe width="500" height="500" src="https://www.youtube.com/embed/vgXw0H-jhUg" title="CACHORROS TIERNOS Y BONITOS 🧡 ¡Vídeos de Perros Cachorros!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Section>
            <Section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.3863029393474!2d-66.94703498901833!3d10.476857395923869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5fb141ce2849%3A0x3d83f967d291f63a!2sInversiones%20Carlanga!5e0!3m2!1ses!2sve!4v1698248149271!5m2!1ses!2sve" width="500" height="500" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Section>
        </div>
    )
}
