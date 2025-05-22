'use client';

import '@mantine/core/styles.layer.css';
import { AppShell, Burger, Group, Skeleton, NavLink, ThemeIcon, Divider, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { AppDirectBrandingColors } from '@/styles/appdirect-branding-colors';
import { HeaderBar } from '../components/HeaderBar';
import { SidebarNav, NavItem } from '../components/SidebarNav';
import { MainLayout } from '../components/MainLayout';

const navLinkStyles = {
  height: 44,
  gap: 'var(--mantine-spacing-sm)',
  paddingLeft: 'var(--mantine-spacing-xs)',
  borderTopLeftRadius: 'var(--mantine-radius-sm)',
  borderBottomLeftRadius: 'var(--mantine-radius-sm)',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
};

const navLinkHoverStyles = {
  root: {
    '&:hover': {
      background: '#f6f8fa',
      borderTopLeftRadius: 'var(--mantine-radius-sm)',
      borderBottomLeftRadius: 'var(--mantine-radius-sm)',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
};

const navItems: NavItem[] = [
  {
    label: 'Home',
    icon: 'ri-home-4-line',
    active: true,
    color: 'dark',
    rightSection: null,
    style: { background: 'var(--mantine-color-blue-light)' },
  },
  {
    label: 'Communication Services',
    icon: 'ri-briefcase-4-line',
    rightSection: <i className="ri-arrow-right-s-line" style={{ fontSize: 20 }} />,
    color: 'dark',
  },
  {
    label: 'Energy',
    icon: 'ri-lightbulb-flash-line',
    color: 'dark',
  },
  {
    label: 'Managed Services',
    icon: 'ri-node-tree',
    color: 'dark',
  },
  {
    label: 'Capital',
    icon: 'ri-bank-card-line',
    color: 'dark',
  },
  {
    label: 'Commissions',
    icon: 'ri-money-dollar-circle-line',
    rightSection: <i className="ri-arrow-right-s-line" style={{ fontSize: 20 }} />,
    color: 'dark',
  },
  {
    label: 'Reports',
    icon: 'ri-bar-chart-line',
    rightSection: <i className="ri-arrow-right-s-line" style={{ fontSize: 20 }} />,
    color: 'dark',
  },
  {
    label: 'Settings',
    icon: 'ri-settings-3-line',
    color: 'dark',
  },
];

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MainLayout header={<HeaderBar />} navbar={<SidebarNav navItems={navItems} />}>
      Main
    </MainLayout>
  );
}
