# Nevola: kompilowalny prototyp bez pozornego logowania

Branch: `wersja-inzynierska-2026`. Stan bazowy: `main` / `53e5ef1269b967f81244dd828f32bb033e7e14ff`. Data wykonania: 29.10.2026.

To autorski wariant rozwojowy konkretnego fragmentu projektu. Branch zachowuje pełne drzewo kodu z wersji bazowej i zawiera opisane poniżej zmiany. [Wcześniejszy audyt](https://github.com/MichalGarnuch/Nevola/tree/audyt-edukacyjny-2026) jest na osobnym branchu. Nie wykonywano merge ani wdrożenia.

## Stan i cel wersji

Klient React zawiera przykładowe dane kadrowe i widoki, ale nie implementuje prawdziwego uwierzytelnienia. Formularz hasła prowadzący zwykłym linkiem do strony nie zabezpiecza aplikacji. Zastąpiłem go jawnym ekranem publicznego demo: informuje o przykładowych danych i nie zbiera firmowego hasła. Nie wystawiaj tu rzeczywistych danych pracowników bez serwera tożsamości i autoryzacji.

## Przywrócenie kontraktu TypeScript

Poprawiłem literówki `resolveJsonModule` i `noEmit`, brakujące importy typów, nazwy plików modeli i przypadkowe używanie typu `Wniosek` jako wartości w nagłówku tabeli. Dodałem deklaracje `react-datepicker`, typy `Date | null`, usunąłem nieużywane stany/importy i nieprawidłowe propsy komponentów Bootstrap. Zmieniane pliki z historycznym kodowaniem zostały zapisane w UTF-8.

Ikona kalendarza szuka inputu w swoim lokalnym kontenerze i bezpiecznie obsługuje jego brak. Wcześniejsze globalne `querySelector` potrafiło ustawiać focus pierwszego kalendarza również przy kliknięciu drugiego. Pusty komponent panelu zwraca teraz jawny widok z informacją o prototypie.

`App.tsx` wyświetla dane wniosków w tabeli wniosków, zamiast podstawiać powiadomienia. Statyczne przykłady nie potrzebują nieużywanych setterów stanu. Próg skracania tekstu odpowiada długości faktycznie zostawianego fragmentu.

## Build nie powinien tworzyć certyfikatu

`vite.config.ts` generuje deweloperski certyfikat przez dotnet tylko dla serwera dev i po jawnym `NEVOLA_DEV_HTTPS=1`. Statyczny build nie uruchamia dotnet ani nie czyta klucza lokalnego użytkownika. Zwykłe dev jest HTTP na localhost; integracja HTTPS z serwerem ASP.NET wymaga włączenia flagi i lokalnego SDK.

## Testy i dalsza architektura

W katalogu `ReactAppNEVOLA/reactappnevola.client`: `npm ci`, `npm run test:engineering`, `npm run build`. Testy Vitest renderują rzeczywistą tabelę i ekran demo do HTML. Sprawdzają dane wniosku, semantyczne nagłówki i brak pola hasła w publicznym prototypie. Build obejmuje ścisły TypeScript i Vite.

Dalej odseparowałbym dane przykładowe od zapytań do API, dodał schemat DTO i stany ładowania/błędu. Logowanie należy oprzeć o backend/OIDC i kontrolę rekordów. Filtry i timery wymagają osobnych testów funkcjonalnych; samo poprawienie kompilacji nie sprawia, że wszystkie kontrolki implementują deklarowane zachowanie.

## Weryfikacja wykonana w tej sesji

| Sprawdzenie | Wynik i znaczenie |
|---|---|
| npm run test:engineering w katalogu klienta | PASS: 2 testy rzeczywistych komponentów |
| npm run build w katalogu klienta | PASS: TypeScript i Vite |
| Instalacja zależności i aktualizacja lockfile | PASS |

### Granice weryfikacji

Nie uruchomiono backendu ASP.NET ani przeglądarki. Brak prawdziwego logowania i API jest jawnie pokazany w demo. Nie potwierdzono funkcjonalności wszystkich filtrów, timerów i formularzy. SSR test MemoryRouter emituje ostrzeżenie useLayoutEffect, bez błędu testu.

## Mapa zmian

- [`ReactAppNEVOLA/reactappnevola.client/tests/demo.test.tsx`](ReactAppNEVOLA/reactappnevola.client/tests/demo.test.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/package-lock.json`](ReactAppNEVOLA/reactappnevola.client/package-lock.json)
- [`ReactAppNEVOLA/reactappnevola.client/package.json`](ReactAppNEVOLA/reactappnevola.client/package.json)
- [`ReactAppNEVOLA/reactappnevola.client/src/App.tsx`](ReactAppNEVOLA/reactappnevola.client/src/App.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/layout/Layout.tsx`](ReactAppNEVOLA/reactappnevola.client/src/layout/Layout.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/page/LogowaniePage.tsx`](ReactAppNEVOLA/reactappnevola.client/src/page/LogowaniePage.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/page/Timer.tsx`](ReactAppNEVOLA/reactappnevola.client/src/page/Timer.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/page/ogolne/MojeAktualnosciPage.tsx`](ReactAppNEVOLA/reactappnevola.client/src/page/ogolne/MojeAktualnosciPage.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/page/ogolne/MojeZastepstwaPage.tsx`](ReactAppNEVOLA/reactappnevola.client/src/page/ogolne/MojeZastepstwaPage.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/page/ogolne/PanelUzytkownikaPage.tsx`](ReactAppNEVOLA/reactappnevola.client/src/page/ogolne/PanelUzytkownikaPage.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/page/ogolne/PowiadomieniaPage.tsx`](ReactAppNEVOLA/reactappnevola.client/src/page/ogolne/PowiadomieniaPage.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/page/ogolne/WnioskiPage.tsx`](ReactAppNEVOLA/reactappnevola.client/src/page/ogolne/WnioskiPage.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/page/pracownik/CzasPracyPage.tsx`](ReactAppNEVOLA/reactappnevola.client/src/page/pracownik/CzasPracyPage.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/page/pracownik/DaneKadrowePage.tsx`](ReactAppNEVOLA/reactappnevola.client/src/page/pracownik/DaneKadrowePage.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/types/MojeAktualnosci/MojaAktualnoscItem.tsx`](ReactAppNEVOLA/reactappnevola.client/src/types/MojeAktualnosci/MojaAktualnoscItem.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/types/Wnioski/WniosekItem.tsx`](ReactAppNEVOLA/reactappnevola.client/src/types/Wnioski/WniosekItem.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/src/types/Wnioski/WnioskiTabela.tsx`](ReactAppNEVOLA/reactappnevola.client/src/types/Wnioski/WnioskiTabela.tsx)
- [`ReactAppNEVOLA/reactappnevola.client/tsconfig.json`](ReactAppNEVOLA/reactappnevola.client/tsconfig.json)
- [`ReactAppNEVOLA/reactappnevola.client/vite.config.ts`](ReactAppNEVOLA/reactappnevola.client/vite.config.ts)
