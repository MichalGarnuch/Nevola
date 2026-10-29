# Nevola — przewodnik i audyt edukacyjny

**Stan przeglądu:** 29 października 2026 r.  
**Gałąź bazowa:** `main`  
**Analizowany commit:** `53e5ef1269b967f81244dd828f32bb033e7e14ff`  
**Mapa wszystkich plików śledzonych przez Git:** [1](AUDYT_MAPA_01.md)

> To jest przegląd reprezentatywnych części projektu z inwentaryzacją wszystkich śledzonych plików, a nie pełna, ręczna weryfikacja każdego wiersza ani certyfikat bezpieczeństwa. Mapa jest automatyczna; wymienienie pliku nie oznacza, że został przetestowany lub dokładnie przeczytany. Wyniki odnoszą się do powyższego commita. Inne gałęzie mogą zawierać inne wersje.

## Co robi projekt

Prototyp portalu pracowniczego: frontend React i szkielet serwera ASP.NET.

## Jak czytać kod i jak przepływają dane

[`ReactAppNEVOLA/reactappnevola.client/src/`](ReactAppNEVOLA/reactappnevola.client/src) zawiera strony i widoki danych; [`ReactAppNEVOLA/ReactAppNEVOLA.Server/Program.cs`](ReactAppNEVOLA/ReactAppNEVOLA.Server/Program.cs) konfiguruje serwer i kontrolery.

Podczas czytania zacznij od punktu wejścia, przejdź do funkcji odpowiadającej za żądanie lub działanie użytkownika, a potem do operacji na danych i wyniku. Mapa plików podaje ścieżki i automatycznie rozpoznane nazwy wybranych deklaracji.

## Co jest wartościowe w obecnym rozwiązaniu

Oddzielny klient i serwer dają dobry punkt wyjścia do stopniowego zastąpienia danych demonstracyjnych rzeczywistym API.

## Ustalenia, luki i proponowany rozwój

- **Potwierdzone — build:** [`ReactAppNEVOLA/reactappnevola.client/tsconfig.json`](ReactAppNEVOLA/reactappnevola.client/tsconfig.json#L12) zawiera nieznane opcje `resolveJsonModuls` i `noEmil`; powoduje to też błąd dotyczący `allowImportingTsExtensions`. Należy poprawić nazwy opcji i ponowić build, a następnie sprawdzić dalsze błędy.

- **Potwierdzone — logowanie:** [`ReactAppNEVOLA/reactappnevola.client/src/page/LogowaniePage.tsx`](ReactAppNEVOLA/reactappnevola.client/src/page/LogowaniePage.tsx) zawiera pola i link prowadzący do strony głównej, bez sprawdzenia hasła lub sesji. To makieta, a nie ochrona danych pracowników.

- **Potwierdzone — repozytorium:** są śledzone katalogi `bin/`, `obj/` i `.vs/`; należy zaplanować usunięcie wygenerowanych artefaktów z repozytorium i reguły `.gitignore`, bez utraty potrzebnych źródeł.

## Sprawdzenia i ich granice

`npm ci` w kliencie przeszło; `npm run build` zakończył się błędami konfiguracji TypeScript. Nie uruchomiono serwera .NET ani testów logowania.

W kopii roboczej dostępne pliki Pythona sprawdzono dodatkowo parserem składni; sprawdzono też składnię odczytanych plików `package.json` i `composer.json`. Nie zastępuje to uruchomienia programu. Kod źródłowy tej gałęzi jest taki sam jak w commicie bazowym; dodane są wyłącznie dokumenty audytu i mapy.

## Jak zaplanować kolejne prace

Najpierw zajmij się punktami oznaczonymi jako krytyczne lub wysokie, następnie ustal, które uwagi wymagają testu na pełnym środowisku. Dla każdej zmiany przygotuj osobną gałąź, konkretny przypadek odtwarzający problem i test rezultatu. Nie traktuj propozycji jako potwierdzenia, że poprawka została już wdrożona.
