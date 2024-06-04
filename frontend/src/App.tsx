import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import Results from './components/ui/results';
import useSearch from './hooks/useSearch'

function App() {
  
  const { handleSearch, search, handleResult } = useSearch();

  const songs: string[] = [
    "agbara olorun po",
    "Jesu lo l'agbara at'ogo",
    "Eyin sa La wi ma ye oun",
    "Ope lo ye o Baba olore",
    "Oyigiyigi"
  ]

  return (
    <div className='flex items-center justify-center w-screen h-screen border'>
      <div className="p-6 lg:w-[30em] w-full">
      <h1 className="text-center text-[18px] font-[800]">Who sang this song?</h1>
      <Input onChange={(e) => handleSearch(e.target.value)} type="text" className='my-2' />
        <Button disabled={!search} onClick={handleResult} className='w-full rounded-md'>
          Search {search && `for ${search}`}
        </Button>
        {search && <Results songs={songs} />}
      </div>
    </div>
  )
}

export default App
