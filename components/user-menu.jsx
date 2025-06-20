import { UserButton } from '@clerk/nextjs'
import { ChartBar, ChartBarStackedIcon, User } from 'lucide-react'
import React from 'react'

const UserMenu = () => {
  return <UserButton appearance={{
    elements:{
        avatarBox: 'h-20 w-20',
    },
  }}>
    <UserButton.MenuItems>
  <UserButton.Link
  label="Dashboard"
  labelIcon={<ChartBarStackedIcon size={18} />}
  href="/dashboard"/>
  </UserButton.MenuItems>
  <UserButton.Action label="manage account"/>
</UserButton>
}

export default UserMenu