import { AuthButton, useAuth } from "src/common/auth"
import { RouterButtonLink } from "src/common/controls";

import './NavigationLinks.styles.scss'

export const NavigationLinks = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className={'navigation'}>
      <AuthButton />

      <div className={'links'}>
        <>
          <RouterButtonLink label='Create task' to='/task' />
          <RouterButtonLink label='Tasks board' to='/dashboard' />
        </>
      </div>
    </div>
  )
}