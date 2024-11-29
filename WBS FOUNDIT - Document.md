# **WBS** Struktura Podziału Pracy

## **Projekt FoundIt**  System do odnajdywania zagubionych przedmiotów

# **Wykonane przez:**

* ## Aleksander Święch	*2.Planowanie  3.Budowa*

* ## Cyprian Szewczak	4.Testy, 5.Wdrożenie

* ## Wojtek	1.Analiza

* ## Stanisław	6.Marketing 7.Eksploatacja

## **Zatwierdzone przez:** 	**Cyprian Szewczak** 

# **Spis Treści**

[**1\. ANALIZA	3**](#1.-analiza)

[1.1. Analiza wymagań funkcjonalnych	4](#1.1.-analiza-wymagań-funkcjonalnych)

[1.2. Analiza wymagań niefunkcjonalnych	5](#1.2.-analiza-wymagań-niefunkcjonalnych)

[1.3. Modelowanie danych	5](#1.3.-modelowanie-danych)

[1.4. Analiza ryzyk	6](#1.4.-analiza-ryzyk)

[1.5. Dokumentacja wyników analizy	6](#1.5.-dokumentacja-wyników-analizy)

[**2\. PROJEKTOWANIE	6**](#2.-projektowanie)

[2.1. Architektura Rozwiązania	6](#2.1.-architektura-rozwiązania)

[2.2. Procesy Biznesowe	7](#2.2.-procesy-biznesowe)

[2.3. Interfejs Użytkownika	7](#2.3.-interfejs-użytkownika)

[2.4. Standardy i Dokumentacja	8](#2.4.-standardy-i-dokumentacja)

[**3\. BUDOWA	8**](#3.-budowa)

[3.1. Alpha	8](#3.1.-alpha)

[3.2. Beta	9](#3.2.-beta)

[3.3. Produkcja	9](#3.3.-produkcja)

[3.4. System Dokumentacji	10](#3.4.-system-dokumentacji)

[**4\. Testy	10**](#4.-testy)

[4.1. Testy systemowe	10](#4.1.-testy-systemowe)

[4.2. Testy bezpieczeństwa	11](#4.2.-testy-bezpieczeństwa)

[4.3. Testy akceptacyjne	11](#4.3.-testy-akceptacyjne)

[**5\. Wdrażanie	12**](#5.-wdrażanie)

[5.1. Przygotowanie środowiska produkcyjnego	12](#5.1.-przygotowanie-środowiska-produkcyjnego)

[5.2. Migracja danych	12](#5.2.-migracja-danych)

[5.3. Wdrożenie aplikacji	12](#5.3.-wdrożenie-aplikacji)

[5.4. Szkolenie użytkowników i wsparcie techniczne	13](#5.4.-szkolenie-użytkowników-i-wsparcie-techniczne)

[**6\. MARKETING	13**](#6.-marketing)

[6.1. Strategie marketingowe	13](#6.1.-strategie-marketingowe)

[6.2. Kampanie promocyjne	14](#6.2.-kampanie-promocyjne)

[**7\. EKSPLOATACJA	14**](#7.-eksploatacja)

[7.1. Zarządzanie systemem	14](#7.1.-zarządzanie-systemem)

[7.2. Obsługa użytkownika	15](#7.2.-obsługa-użytkownika)

[7.3. Bezpieczeństwo operacyjne	15](#7.3.-bezpieczeństwo-operacyjne)

# 

# 

# **1\. ANALIZA** {#1.-analiza}

## **1.1. Analiza wymagań funkcjonalnych** {#1.1.-analiza-wymagań-funkcjonalnych}

### **1.1.1. Analiza procesów zgłaszania zgub**

### **1.1.2. Analiza procesów zgłaszania znalezisk**

### **1.1.3. Analiza procesów matchowania przedmiotów**

### **1.1.4. Analiza procesów logistycznych**

#### **1.1.4.1. Nadanie przesyłki**

#### **1.1.4.2. Śledzenie przesyłek**

#### **1.1.4.3. Potwierdzenie odbioru**

### **1.1.5. Analiza procesów płatności**

#### **1.1.5.1. Obsługa escrow**

#### **1.1.5.2. Rozliczenie wysyłek**

#### **1.1.5.3. Obsługa reklamacji**

## 

## **1.2. Analiza wymagań niefunkcjonalnych** {#1.2.-analiza-wymagań-niefunkcjonalnych}

### **1.2.1. Wymagania wydajnościowe**

#### **1.2.1.1. Obciążenie serwera**

#### **1.2.1.2. Obsługa równoczesnych użytkowników**

### **1.2.2. Wymagania bezpieczeństwa**

#### **1.2.2.1. Ochrona danych użytkowników**

#### **1.2.2.2. Odporność na ataki (np. SQL Injection)**

#### **1.2.2.3. Zgodność z RODO**

### **1.2.3. Wymagania integracji API**

#### **1.2.3.1. Płatności i escrow**

#### **1.2.3.2. Geolokalizacja**

#### **1.2.3.3. API InPost**

## **1.3. Modelowanie danych** {#1.3.-modelowanie-danych}

### **1.3.1. Analiza struktury bazy danych**

#### **1.3.1.1. Projekt tabel zgłoszeń**

#### **1.3.1.2. Projekt tabel użytkowników**

#### **1.3.1.3. Projekt tabel logistycznych**

### **1.3.2. Specyfikacja przepływu danych między systemami**

#### **1.3.2.1. Przepływ zgłoszenia od użytkownika do bazy**

#### **1.3.2.2. Integracja danych z API InPost i geolokalizacji**

#### **1.3.2.3. Obsługa danych płatności w escrow**

## 

## **1.4. Analiza ryzyk** {#1.4.-analiza-ryzyk}

### **1.4.1. Identyfikacja potencjalnych zagrożeń (np. błędy integracji, niewydolność systemu)**

### **1.4.2. Ocena wpływu ryzyk na funkcjonalność**

### **1.4.3. Plan minimalizacji ryzyk**

## **1.5. Dokumentacja wyników analizy** {#1.5.-dokumentacja-wyników-analizy}

### **1.5.1. Raport wymagań funkcjonalnych**

### **1.5.2. Raport wymagań niefunkcjonalnych**

### **1.5.3. Dokumentacja modelu danych**

### **1.5.4. Dokumentacja planu zarządzania ryzykiem**

# **2\. PROJEKTOWANIE** {#2.-projektowanie}

## **2.1. Architektura Rozwiązania** {#2.1.-architektura-rozwiązania}

### **2.1.1. Architektura Systemu**

#### **2.1.1.1. Diagram architektury**

#### **2.1.1.2. Diagram przepływu danych**

#### **2.1.1.3. Schemat bazy danych**

#### **2.1.1.4. Architektura systemu escrow**

### **2.1.2. Plan Integracji**

#### **2.1.2.1. Specyfikacja API płatności i escrow**

#### **2.1.2.2. Specyfikacja API InPost**

#### **2.1.2.3. Specyfikacja geolokalizacji**

## **2.2. Procesy Biznesowe** {#2.2.-procesy-biznesowe}

### **2.2.1. Proces Główny**

#### **2.2.1.1. Proces zgłaszania zgub**

#### **2.2.1.2. Proces zgłaszania znalezisk**

#### **2.2.1.3. Proces matchowania**

### **2.2.2. Proces Logistyczny**

#### **2.2.2.1. Nadanie przesyłki (z API InPost albo w ich apce)**

#### **2.2.2.2. Śledzenie przesyłki (generowanie linków do InPost)**

#### **2.2.2.3. Potwierdzenie odbioru (z API InPost)**

### **2.2.3. Proces Płatności**

#### **2.2.3.1. Wypłata znaleźnego poprzez escrow**

#### **2.2.3.2. Rozliczenie wysyłki**

#### **2.2.3.3. Obsługa reklamacji płatności**

## **2.3. Interfejs Użytkownika** {#2.3.-interfejs-użytkownika}

### **2.3.1. Makiety Główne**

#### **2.3.1.1. Rejestracja/logowanie**

#### **2.3.1.2. Zgłaszanie przedmiotów**

#### **2.3.1.3. Lista dopasowań**

### **2.3.2. Makiety Procesów**

#### **2.3.2.1. Proces wysyłki**

#### **2.3.2.2. Proces płatności i escrow**

## **2.4. Standardy i Dokumentacja** {#2.4.-standardy-i-dokumentacja}

### **2.4.1. Standardy Nazewnictwa**

#### **2.4.1.1. Opracowanie słownika projektowego i terminologii**

#### **2.4.1.2. Projekt konwencji nazewnictwa dla systemu**

### **2.4.2. Standardy Dokumentacji Technicznej**

#### **2.4.2.1. Projekt szablonów dokumentacji** 

#### **2.4.2.2. Specyfikacja wymagań dla systemu dokumentacji**

### **2.4.3. Specyfikacja API**

#### **2.4.3.1. Projekt standardów dokumentacji API** 

#### **2.4.3.2. Specyfikacja systemu wersjonowania**

#### **2.4.3.3. Skrypt tworzący środowisko testowe API** 

# **3\. BUDOWA** {#3.-budowa}

## **3.1. Alpha** {#3.1.-alpha}

### **3.1.1. Podstawowe Funkcje**

#### **3.1.1.1. Rejestracja użytkownika**

#### **3.1.1.2. Zgłaszanie przedmiotów**

#### **3.1.1.3. Podstawowy matching**

### **3.1.2. Działające Demo *Minimal Viable Product***

#### **3.1.2.1. Formularze zgłoszeń**

#### **3.1.2.2. Widok dopasowań**

#### **3.1.2.3. Profil użytkownika**

## **3.2. Beta** {#3.2.-beta}

### **3.2.1. Weryfikacja**

#### **3.2.1.1. System weryfikacji tożsamości**

#### **3.2.1.2. System ocen**

#### **3.2.1.3. System zabezpieczenia transakcji escrow**

### **3.2.2. Rozszerzony Matching**

#### **3.2.2.1. Geolokalizacja**

#### **3.2.2.2. Zaawansowane filtry**

#### **3.2.2.3. System powiadomień**

## **3.3. Produkcja** {#3.3.-produkcja}

### **3.3.1. Integracje**

#### **3.3.1.1. Integracja płatności**

#### **3.3.1.2. Integracja InPost**

#### **3.3.1.3. Integracja map**

### **3.3.2. System Logistyczny**

#### **3.3.2.1. Generowanie listów przewozowych**

#### **3.3.2.2. Śledzenie przesyłek**

## **3.4. System Dokumentacji** {#3.4.-system-dokumentacji}

### **3.4.1. Implementacja Podstawowa**

#### **3.4.1.1. Wdrożenie systemu dokumentacji kodu**

#### **3.4.1.2. Implementacja portalu dokumentacji**

### **3.4.2. Dokumentacja API**

#### **3.4.2.1. Implementacja dokumentacji API Inpost**

#### **3.4.2.2. Stworzenie dokumentacji API Providera płatności i escrow**

### **3.4.3. Narzędzia Dokumentacji**

#### **3.4.3.1. System zarządzania wersjami dokumentacji**

#### **3.4.3.2. Implementacja walidatorów nazewnictwa** 

# **4\. Testy** {#4.-testy}

## **4.1. Testy systemowe** {#4.1.-testy-systemowe}

### **4.1.1. Testowanie funkcjonalności aplikacji**

#### **4.1.1.1. Zgłaszanie zgubionych przedmiotów**

#### **4.1.1.2. Zgłaszanie znalezionych przedmiotów**

#### **4.1.1.3. Rejestracja użytkownika**

#### **4.1.1.4. Zgłaszanie przedmiotów**

#### **4.1.1.5. Podstawowy matching**

### 

### **4.1.2. Testowanie integracji API**

#### **4.1.2.1. API płatności i escrow**

#### **4.1.2.2. API InPost**

#### **4.1.2.3. API geolokalizacji**

### **4.1.3. Testy wydajnościowe**

#### **4.1.3.1. Obciążenie serwera**

#### **4.1.3.2. Obsługa wielu użytkowników**

#### **4.1.3.3. Wydajność systemu powiadomień**

## **4.2. Testy bezpieczeństwa** {#4.2.-testy-bezpieczeństwa}

### **4.2.1. Testy ochrony danych użytkownika**

### **4.2.2. Testy odporności na ataki (np. SQL Injection)**

### **4.2.3. Weryfikacja zgodności z RODO**

#### **4.2.4. Testy bezpieczeństwa płatności**

## **4.3. Testy akceptacyjne** {#4.3.-testy-akceptacyjne}

### **4.3.1. Weryfikacja zgodności z wymaganiami biznesowymi**

### **4.3.2. Testy z udziałem grupy testowej (feedback użytkowników)**

# **5\. Wdrażanie** {#5.-wdrażanie}

## **5.1. Przygotowanie środowiska produkcyjnego** {#5.1.-przygotowanie-środowiska-produkcyjnego}

### **5.1.1. Konfiguracja serwerów** 

#### **5.1.1.1. Ustawienie serwerów w chmurze**

#### **5.1.1.2. Instalacja systemów operacyjnych**

#### **5.1.1.3. Konfiguracja Dockera**

### **5.1.2. Wdrożenie bazy danych** 

#### **5.1.2.1. Ustawienie bazy danych**

#### **5.1.2.2. Konfiguracja środowiska bazy danych**

#### **5.1.2.3. Instalacja oprogramowania i bibliotek**

### **5.1.3. Zabezpieczenia środowiska** 

#### **5.1.3.1. Konfiguracja szyfrowania bazy danych**

#### **5.1.3.2. Konfiguracja dostępu**

#### **5.1.3.3. Wdrożenie alertów dotyczących bezpieczeństwa**

## **5.2. Migracja danych** {#5.2.-migracja-danych}

### **5.2.1. Import danych testowych**

#### **5.2.1.1. Weryfikacja integralności danych**

### 	**5.2.2. Automatyczny backup**

##### 	**5.2.2.1. Test przywrócenia automatycznego backupu**

## **5.3. Wdrożenie aplikacji** {#5.3.-wdrożenie-aplikacji}

### **5.3.1. Przeniesienie aplikacji na serwer produkcyjny**

#### **5.3.1.1. Autostart środowiska**

#### **5.3.1.2. Audyt pusha pod zawartość kluczy api**

#### **5.3.1.1. Weryfikacja uprawnień**

### **5.3.2. Weryfikacja połączeń API**

## **5.4. Szkolenie użytkowników i wsparcie techniczne** {#5.4.-szkolenie-użytkowników-i-wsparcie-techniczne}

### **5.4.1. Przygotowanie dokumentacji użytkownika**

### **5.4.2. Szkolenie zespołu wsparcia technicznego**

### **5.4.3. Uruchomienie kanałów wsparcia dla użytkowników końcowych**

# **6\. MARKETING** {#6.-marketing}

## **6.1. Strategie marketingowe** {#6.1.-strategie-marketingowe}

### **6.1.1. Analiza rynku i konkurencji**

#### **6.1.1.1. Badanie potrzeb klientów**

#### **6.1.1.2. Analiza konkurencyjnych produktów/usług**

### **6.1.2. Planowanie kampanii reklamowych**

#### **6.1.2.1. Wyznaczenie celów kampanii**

#### **6.1.2.2. Wybór kanałów marketingowych**

#### **6.1.2.3. Opracowanie harmonogramu działań**

### **6.1.3. Budżetowanie marketingowe**

#### **6.1.3.1. Przydzielenie środków na działania promocyjne**

#### **6.1.3.2. Monitorowanie wykorzystania budżetu**

## **6.2. Kampanie promocyjne** {#6.2.-kampanie-promocyjne}

### **6.2.1. Tworzenie materiałów**

#### **6.2.1.1. Projektowanie materiałów wizualnych**	

#### **6.2.1.2. Przygotowanie treści tekstowych**

### **6.2.2. Realizacja kampanii**

#### **6.2.2.1. Publikacja w social media**

#### **6.2.2.2. E-mail marketing**

#### **6.2.2.3. Płatne kampanie reklamowe**

#### **6.2.2.4. Monitorowanie wyników i optymalizacja**

# 

# **7\. EKSPLOATACJA** {#7.-eksploatacja}

## **7.1. Zarządzanie systemem** {#7.1.-zarządzanie-systemem}

### **7.1.1. Utrzymanie infrastruktury**

#### **7.1.1.1. Monitoring działania systemu**

#### **7.1.1.2. Instalowanie aktualizacji i łatek**

### **7.1.2. Automatyzacja procesów**

#### **7.1.2.1. Konfiguracja automatycznych kopii zapasowych**

#### **7.1.2.2. Usprawnianie procesów operacyjnych**

### **7.1.3. Zarządzanie dostępem**

#### **7.1.3.1. Tworzenie kont użytkowników**

#### **7.1.3.2. Zarządzanie uprawnieniami i rolami**

#### ***7.1.4.*** ***Opłaty cykliczne***

####     **7.1.4.1 Opłaty za Serwery/Chmury**

	    **7.1.4.2 Opłaty za licencje**

## **7.2. Obsługa użytkownika** {#7.2.-obsługa-użytkownika}

### **7.2.1. Wsparcie techniczne**

#### **7.2.1.1. Rozwiązywanie problemów zgłaszanych przez użytkowników**

#### **7.2.1.2. Udzielanie informacji i szkoleń**

### **7.2.2. Obsługa zgłoszeń**

#### **7.2.2.1. Rejestracja zgłoszeń serwisowych**

#### **7.2.2.2. Zarządzanie reklamacjami**

### **7.2.3. Dokumentacja**

#### **7.2.3.1. Aktualizacja instrukcji użytkownika**

#### **7.2.3.2. Publikacja FAQ na stronie pomocy**

## **7.3. Bezpieczeństwo operacyjne** {#7.3.-bezpieczeństwo-operacyjne}

### **7.3.1. Monitorowanie zagrożeń**

#### **7.3.1.1. Analiza logów systemowych**

#### **7.3.1.2. Identyfikacja potencjalnych zagrożeń**

### **7.3.2. Zabezpieczenia systemu**

#### **7.3.2.1. Implementacja narzędzi ochronnych** 

#### **7.3.2.2. Aktualizacja polityki bezpieczeństwa**