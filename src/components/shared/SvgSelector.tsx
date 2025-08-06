interface SvgSelectorProps {
  svg: 'incoming' | 'outcoming' | 'missed' | 'unanswered' | string;
}

const SvgSelector = ({ svg }: SvgSelectorProps) => {
  switch (svg) {
    case 'incoming':
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z'
            fill='#005FF8'
          />
        </svg>
      );

    case 'outcoming':
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.99999 17.3447L7.17703 18.5217L16.8522 8.8466V14.3478H18.5217V5.99999L10.1739 5.99999V7.66955L15.6751 7.66955L5.99999 17.3447Z'
            fill='#28A879'
          />
        </svg>
      );

    case 'missed':
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z'
            fill='#EA1A4F'
          />
        </svg>
      );

    case 'unanswered':
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.99999 17.3447L7.17703 18.5217L16.8522 8.8466V14.3478H18.5217V5.99999L10.1739 5.99999V7.66955L15.6751 7.66955L5.99999 17.3447Z'
            fill='#EA1A4F'
          />
        </svg>
      );
    case 'play':
      return (
        <svg
          width='8'
          height='10'
          viewBox='0 0 8 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.287422 0.0693819C0.376104 0.0231631 0.475355 0 0.574754 0C0.673886 0 0.773106 0.0231631 0.862176 0.0693819L7.71255 4.55186C7.89006 4.64422 8 4.81521 8 5.00008C8 5.18493 7.89036 5.3559 7.71255 5.44814L0.862176 9.93081C0.684394 10.0231 0.465233 10.0231 0.287571 9.93081C0.109759 9.83824 0 9.6672 0 9.48246V0.51755C0 0.332781 0.10958 0.16182 0.287422 0.0693819Z'
            fill='#002CFB'
          />
        </svg>
      );

    case 'download':
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 20H19V18.1176H6V20ZM19 9.64706H15.2857V4H9.71429V9.64706H6L12.5 16.2353L19 9.64706Z'
            fill='#ADBFDF'
          />
        </svg>
      );

    case 'close':
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_1_903)'>
            <path
              d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
              fill='#ADBFDF'
            />
          </g>
          <defs>
            <clipPath id='clip0_1_903'>
              <rect width='24' height='24' fill='white' />
            </clipPath>
          </defs>
        </svg>
      );

    default:
      return null;
  }
};

export default SvgSelector;
