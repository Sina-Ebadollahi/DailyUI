import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const SidebarAssetsArr = [
    {
        buttonText: "Dashboard",
        buttonIcon: DashboardIcon,
        buttonNavLink: "/admin/Dashboard",
    },
    {
        buttonText: "Wallet",
        buttonIcon: AccountBalanceWalletIcon,
        buttonNavLink: "/admin/Wallet",
    },
    {
        buttonText: "Buy & Sell",
        buttonIcon: ShoppingCartIcon,
        buttonNavLink: "/admin/buysell",
    },
]