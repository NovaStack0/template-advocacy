export interface IOcuppationArea {
    id: number
    title: string
    description: string
    color: string
}


export const Occupations: IOcuppationArea[] = [
    {
        id: 1,
        title: 'Direito do Consumidor',
        description: 'Garantimos que você seja tratado com justiça e equidade. Conte conosco para sua orientação e proteção dos seus direitos',
        color: 'primary'
    },
    {
        id: 2,
        title: 'Direito Civil',
        description: 'Resolvemos questões com expertise e dedicação, buscando sempre a justiça para nossos clientes. Seu direito é nossa prioridade.',
        color: 'secondary'
    },
    {
        id: 3,
        title: 'Direito Previdenciário',
        description: 'Estamos aqui para orientar e defender seus direitos previdenciários, assegurando que você receba o que é seu por direito.',
        color: 'primary'
    },
    {
        id: 4,
        title: 'Direito Trabalhista',
        description: 'Somos especialistas em Direito Trabalhista, comprometidos em assegurar justiça e equidade nas relações laborais.',
        color: 'secondary'
    }
]