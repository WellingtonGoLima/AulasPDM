
import './styles.css'

const App = () => {
    return (
        <div
            style={{
                margin: 'auto',
                width: 768,
                backgroundColor: '#5ef03a',
                padding: 26,
                borderRadius: 8,
                display: 'flex',
                gap: 10,
                justifyContent: 'center'
            }}
        >
            <figure style={{ textAlign: 'center' }}>
                <img src="img/dr chapatin.jpeg" alt="Dr Chapatin" width="145" height="175" style={{ borderRadius: '30%' }} />
                <figcaption>Dr Chapatin
                    <p>Clinico Geral</p>
                </figcaption>
            </figure>

            <figure style={{ textAlign: 'center' }}>
                <img src="img/Hans chucrutes.jpeg" alt="Dr Hans Chucrute" width="145" height="175" style={{ borderRadius: '30%' }} />
                <figcaption>Dr Hans Chucrute
                    <p>Cirurgião</p>
                </figcaption>
            </figure>

            <figure style={{ textAlign: 'center' }}>
                <img src="img/drhouse.jpg" alt="Dr House" width="145" height="175" style={{ borderRadius: '30%' }} />
                <figcaption>Dr House
                   <p>Infectologista</p> 
                </figcaption>
            </figure>
        </div>
    );
}

export default App;

