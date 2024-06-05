import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import avatar from "/public/avatar.webp";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, NavLink } from "react-router-dom";
import _ from "lodash";
import "./Sidebar.css";
import { useState } from "react";
import { ModeToggle } from "./ThemeToggle";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Sidebar = ({ onClick, ...rest }: ButtonProps) => {
  const [active, setActive] = useState("");

  const breadcrumbChangeFn = (name: string) => {
    const CapitalName = _.capitalize(name);
    setActive(CapitalName);
  };

  return (
    <div className="sidebar">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 navbar-links">
          <NavLink
            to={"/"}
            // href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </NavLink>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  onClick={() => breadcrumbChangeFn("")}
                  to={"/dashboard"}
                  // href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:!text-foreground md:h-8 md:w-8 nav-links-custom"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  onClick={() => breadcrumbChangeFn("orders")}
                  to={"/orders"}
                  // href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:!text-foreground md:h-8 md:w-8 nav-links-custom"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Orders</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Orders</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  onClick={() => breadcrumbChangeFn("products")}
                  to={"/products"}
                  // href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:!text-foreground md:h-8 md:w-8 nav-links-custom"
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Products</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  onClick={() => breadcrumbChangeFn("customers")}
                  to={"/customers"}
                  // href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:!text-foreground md:h-8 md:w-8 nav-links-custom"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Customers</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  onClick={() => breadcrumbChangeFn("Analytics")}
                  to={"/analytics"}
                  // href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:!text-foreground md:h-8 md:w-8 nav-links-custom"
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  to={"#"}
                  // href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 bg-background">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs mob-nav">
              <nav className="grid gap-6 text-lg font-medium navbar-links">
                <Link
                  to={"/"}
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <NavLink
                  to={"/dashboard"}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground !hover:text-foreground nav-links-custom"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </NavLink>
                <NavLink
                  onClick={() => breadcrumbChangeFn("orders")}
                  to={"/orders"}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground nav-links-custom"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </NavLink>
                <NavLink
                  onClick={() => breadcrumbChangeFn("orders")}
                  to={"/products"}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground !hover:text-foreground nav-links-custom"
                >
                  <Package className="h-5 w-5" />
                  Products
                </NavLink>
                <NavLink
                  onClick={() => breadcrumbChangeFn("orders")}
                  to={"/customers"}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground !hover:text-foreground nav-links-custom"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </NavLink>
                <NavLink
                  to={"/analytics"}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground !hover:text-foreground nav-links-custom"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <NavLink to={`/${active}`}>{active}</NavLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src={avatar}
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
      </div>
    </div>
  );
};

export default Sidebar;
