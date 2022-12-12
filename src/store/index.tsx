import { configureStore } from '@reduxjs/toolkit'
import isActive from './slice/isActiveState.slice'
import isDark from './slice/isDark.slices'

export default configureStore({
  reducer: {
        isActive, 
        isDark
	}
})