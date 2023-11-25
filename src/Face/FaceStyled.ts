import styled from "styled-components";


export const Faceblock = styled.div`

  margin: 0 auto;
  height: '100px'; /* Використання переданих або значень за замовчуванням */
  width: '100px'; /* Використання переданих або значень за замовчуванням */
  position: relative;
  background-color: blue;
.faceblock{
  margin: 0 auto;
  height: '100px'; /* Використання переданих або значень за замовчуванням */
  width: '100px'; /* Використання переданих або значень за замовчуванням */
  position: relative;
  background-color: blue;
}
`;

export const EyesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Eye = styled.div`

    position: relative;
    height: 40px;
    /* Задайте потрібну висоту */
    width: 40px;
    /* Задайте потрібну ширину */
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
`
export const Pupil = styled.div`
    position: absolute;
    height: 10px;
    /* Задайте потрібну висоту */
    width: 10px;
    /* Задайте потрібну ширину */
    border-radius: 50%;
    background: #fff;
    animation: blink 3s linear infinite;
`
export const MouthWrapper = styled.div`
    height: 30px;
    /* Задайте потрібну висоту */
    width: 60px;
    /* Задайте потрібну ширину */
    margin: 10px auto;
    overflow: hidden;
`
export const Mouth = styled.div`
    margin: 0 auto;
    height: 60px;
    /* Задайте потрібну висоту */
    width: 60px;
    /* Задайте потрібну ширину */
    transform: translateY(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, #A53860 0%, #A53860 50%, transparent 50%, transparent 100%), radial-gradient(circle, #A53860 0%, #A53860 50%, transparent 50%, transparent 100%), linear-gradient(to right, #FFFFFF 0%, #FFFFFF 40%, transparent 40%, transparent 60%, #FFFFFF 60%, #FFFFFF 100%), linear-gradient(to right, #450920 0%, #450920 100%);
    background-size: 30px 30px, 30px 30px, 20px 20px, 100%;
    background-repeat: no-repeat;
    background-position: 20% 160%, 70% 160%, 50% 50%, 0 0;
    transition: all 0.3s ease;
    .closed{
            height: 30px;
    /* Задайте потрібну висоту */
    width: 30px;
    /* Задайте потрібну ширину */
    transform: translateY(0);
    background-size: 10px 10px, 10px 10px, 20px 20px, 100%;
    background-position: 20% 150%, 70% 150%, 50% -200%, 0 0;

    }
`
// export const MouthClosed = styled.div`

//     height: 30px;
//     /* Задайте потрібну висоту */
//     width: 30px;
//     /* Задайте потрібну ширину */
//     transform: translateY(0);
//     background-size: 10px 10px, 10px 10px, 20px 20px, 100%;
//     background-position: 20% 150%, 70% 150%, 50% -200%, 0 0;
// `

// @keyframes blink {
//     0% {
//         height: 10px;
//     }

//     96% {
//         height: 10px;
//     }

//     98% {
//         height: 1px;
//     }

//     100% {
//         height: 10px;
//     }
// }