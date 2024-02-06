import { useTheme, useThemeDispatch } from "./ThemeContext";

export default function FontButton() {

  const { state } = useTheme();
  const dispatch = useThemeDispatch();

  return (
    
    <div className="flex flex-col gap-2">

      {state.userPreferences.fontSize === 'medium' ? (<button className="p-2 bg-gray-400 dark:bg-gray-600 rounded-lg" onClick={() => {
        dispatch({
          type: 'changed_fontSize',
          fontSize: 'x-large'
        })
      }}>
        Change Font Size of following text:
      </button>) :  (<button className="p-2 bg-gray-400 dark:bg-gray-600 rounded-lg " onClick={() => {
        dispatch({
          type: 'changed_fontSize',
          fontSize: 'medium'
        })
      }}>
        Change Font Size of following text:
      </button>)}

      <p style={{fontSize: `${state.userPreferences.fontSize}`}}>
       <b>{state.userPreferences.fontSize}</b>
      </p>
      
    </div>
      
  )


}