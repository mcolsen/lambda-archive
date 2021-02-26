import useLocalStorage from './useLocalStorage'

export const useDarkMode = (bool) => {
	const [darkMode, setDarkMode] = useLocalStorage(bool)
}