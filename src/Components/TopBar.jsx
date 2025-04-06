import logo from '../assets/logo5.png';
import { MapPinIcon } from '@heroicons/react/24/outline';
// import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 8,
    border: `2px outlined ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

// Custom styled IconButton to remove hover effects
const StyledIconButton = styled(IconButton)(() => ({
  '&:hover': {
    backgroundColor: 'transparent', // Remove hover background color
  },
  '& .MuiTouchRipple-root': {
    display: 'none', // Disable ripple effect
  },
}));

const TopBar = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 flex items-center justify-between'>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className='w-28 md:w-36' />
        <MapPinIcon strokeWidth={2} className=' text-black size-6 ml-6 md:ml-14 cursor-pointer' />
        <p>
          <span className=' text-black font-semibold ml-2'>Rustaq</span>
        </p>
      </div>
      <div className='flex items-center'>
        <UserIcon strokeWidth={2} className='text-black size-6 mr-5 md:mr-10 cursor-pointer' />
        <StyledIconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="success" className='text-gray-700 '>
            <ShoppingCartOutlinedIcon />
          </StyledBadge>
        </StyledIconButton>
      </div>
    </div>
  )
}

export default TopBar;
