import styled from 'styled-components';
import { variant } from 'styled-system';


const SectionGroup = styled('section')(
  variant({
    prop: 'color',
    variants: {
      primary: {
        color: 'primary.text',
        bg: 'primary.bg',
      },
      secondary: {
        color: 'secondary.text',
        bg: 'secondary.bg',
        'h2, h3': {
          color: 'black',
        }
      },
    },
  }),
  variant({
    prop: 'space',
    variants: {
      default: {
        padding: ['40px 20px', '80px 140px']
      },
      fullWidth: {

      },
      marginLeft: {
        padding: ['40px 20px', '80px 140px 80px 70px'],
        marginLeft: ['0', '70px']
      }
    }
  })
)


const Section = ({ children, color, space }) => {

  return (
    <SectionGroup 
      color={color} 
      space={space}
    >
      {children}
    </SectionGroup>
  )
}

export default Section