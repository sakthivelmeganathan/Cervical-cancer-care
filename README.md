# Cervical Cancer Care Management System

A comprehensive web application for managing cervical cancer patient care, built with Next.js and Supabase.

## Features

- **Patient Management** - Track patient records, medical history, and appointments
- **Doctor Portal** - Manage patients, view symptoms, schedule appointments
- **Symptom Tracking** - Daily symptom logging with pain and fatigue scales
- **Messaging System** - Real-time communication between doctors and patients
- **Appointment Scheduling** - Book and manage medical appointments
- **Educational Content** - Health information and resources
- **QR Code Integration** - Quick patient-doctor linking
- **Multi-language Support** - Internationalization ready

## Tech Stack

- **Frontend:** Next.js 14+, React, TypeScript, TailwindCSS
- **Backend:** Supabase (PostgreSQL, Auth, Storage, Realtime)
- **UI Components:** Lucide React, Recharts, QRCode.react
- **Authentication:** Supabase Auth with Row Level Security

## Getting Started

### Prerequisites

- Node.js 18+ 
- Supabase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/sakthivelmeganathan/Cervical-cancer-care.git
cd Cervical-cancer-care
```

2. Install dependencies
```bash
npm install
```

3. Set up Supabase

Create a new Supabase project at https://supabase.com

4. Configure environment variables

Create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

5. Set up database

Run the SQL scripts in order from the `database/` folder:
- `01_create_tables.sql`
- `02_enable_rls.sql`
- `03_create_triggers.sql`
- `04_storage_policies.sql` (after creating storage buckets)
- `05_sample_data.sql` (optional)

6. Create Storage Buckets

In Supabase Dashboard → Storage:
- Create `medical-documents` bucket (private)
- Create `avatars` bucket (public)

7. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Database Schema

- **users** - User accounts (doctors and patients)
- **patients** - Patient profiles
- **appointments** - Medical appointments
- **symptoms_log** - Daily symptom tracking
- **messages** - Doctor-patient communication
- **medications** - Prescribed medications
- **treatments** - Treatment plans
- **diagnoses** - Cancer diagnoses
- **screening_records** - Screening test results
- **educational_content** - Health information
- **notifications** - System notifications
- **audit_logs** - Activity tracking

## Project Structure

```
├── database/           # SQL scripts for database setup
├── out/               # Built static export
├── public/            # Static assets
└── documentation/     # Setup guides
```

## Documentation

- [Database Setup Guide](database/README.md)
- [Troubleshooting Guide](TROUBLESHOOTING.md)
- [Appwrite Setup](APPWRITE_SETUP.md) (migration in progress)

## Security

- Row Level Security (RLS) enabled on all tables
- Patients can only access their own data
- Doctors have read access to all patient data
- Secure authentication via Supabase Auth

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
