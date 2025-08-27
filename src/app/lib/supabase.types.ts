export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '12.2.3 (519615d)'
  }
  public: {
    Tables: {
      categories_membres: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          nom: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          nom: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          nom?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      comptes_caisse: {
        Row: {
          created_at: string | null
          devise: Database['public']['Enums']['devise_enum']
          id: string
          solde: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          devise: Database['public']['Enums']['devise_enum']
          id?: string
          solde?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          devise?: Database['public']['Enums']['devise_enum']
          id?: string
          solde?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      cotisations_evenements: {
        Row: {
          categorie_id: string | null
          created_at: string | null
          date_limite: string | null
          evenement_id: string | null
          id: string
          montant_cdf: number | null
          montant_usd: number | null
          notes: string | null
          updated_at: string | null
        }
        Insert: {
          categorie_id?: string | null
          created_at?: string | null
          date_limite?: string | null
          evenement_id?: string | null
          id?: string
          montant_cdf?: number | null
          montant_usd?: number | null
          notes?: string | null
          updated_at?: string | null
        }
        Update: {
          categorie_id?: string | null
          created_at?: string | null
          date_limite?: string | null
          evenement_id?: string | null
          id?: string
          montant_cdf?: number | null
          montant_usd?: number | null
          notes?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'cotisations_evenements_categorie_id_fkey'
            columns: ['categorie_id']
            isOneToOne: false
            referencedRelation: 'categories_membres'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'cotisations_evenements_evenement_id_fkey'
            columns: ['evenement_id']
            isOneToOne: false
            referencedRelation: 'evenements'
            referencedColumns: ['id']
          },
        ]
      }
      email_temp: {
        Row: {
          email: string
          id: number
          password: string
        }
        Insert: {
          email: string
          id?: number
          password: string
        }
        Update: {
          email?: string
          id?: number
          password?: string
        }
        Relationships: []
      }
      evenements: {
        Row: {
          cout_total_cdf: number | null
          cout_total_usd: number | null
          created_at: string | null
          date_debut: string
          date_fin: string | null
          description: string | null
          id: string
          lieu: string | null
          nom: string
          statut: string | null
          type_evenement: string | null
          updated_at: string | null
        }
        Insert: {
          cout_total_cdf?: number | null
          cout_total_usd?: number | null
          created_at?: string | null
          date_debut: string
          date_fin?: string | null
          description?: string | null
          id?: string
          lieu?: string | null
          nom: string
          statut?: string | null
          type_evenement?: string | null
          updated_at?: string | null
        }
        Update: {
          cout_total_cdf?: number | null
          cout_total_usd?: number | null
          created_at?: string | null
          date_debut?: string
          date_fin?: string | null
          description?: string | null
          id?: string
          lieu?: string | null
          nom?: string
          statut?: string | null
          type_evenement?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      membres: {
        Row: {
          adresse: string | null
          categorie_id: string | null
          created_at: string | null
          date_adhesion: string | null
          date_naissance: string | null
          email: string | null
          est_actif: boolean | null
          id: string
          nom: string
          notes: string | null
          photo_url: string | null
          prenom: string
          telephone: string | null
          updated_at: string | null
          voix: Database['public']['Enums']['voix_enum'] | null
        }
        Insert: {
          adresse?: string | null
          categorie_id?: string | null
          created_at?: string | null
          date_adhesion?: string | null
          date_naissance?: string | null
          email?: string | null
          est_actif?: boolean | null
          id?: string
          nom: string
          notes?: string | null
          photo_url?: string | null
          prenom: string
          telephone?: string | null
          updated_at?: string | null
          voix?: Database['public']['Enums']['voix_enum'] | null
        }
        Update: {
          adresse?: string | null
          categorie_id?: string | null
          created_at?: string | null
          date_adhesion?: string | null
          date_naissance?: string | null
          email?: string | null
          est_actif?: boolean | null
          id?: string
          nom?: string
          notes?: string | null
          photo_url?: string | null
          prenom?: string
          telephone?: string | null
          updated_at?: string | null
          voix?: Database['public']['Enums']['voix_enum'] | null
        }
        Relationships: [
          {
            foreignKeyName: 'membres_categorie_id_fkey'
            columns: ['categorie_id']
            isOneToOne: false
            referencedRelation: 'categories_membres'
            referencedColumns: ['id']
          },
        ]
      }
      paiements_cotisations: {
        Row: {
          cotisation_evenement_id: string | null
          created_at: string | null
          date_paiement: string | null
          id: string
          membre_id: string | null
          methode_paiement: string | null
          montant_paye_cdf: number | null
          montant_paye_usd: number | null
          notes: string | null
          reference_paiement: string | null
        }
        Insert: {
          cotisation_evenement_id?: string | null
          created_at?: string | null
          date_paiement?: string | null
          id?: string
          membre_id?: string | null
          methode_paiement?: string | null
          montant_paye_cdf?: number | null
          montant_paye_usd?: number | null
          notes?: string | null
          reference_paiement?: string | null
        }
        Update: {
          cotisation_evenement_id?: string | null
          created_at?: string | null
          date_paiement?: string | null
          id?: string
          membre_id?: string | null
          methode_paiement?: string | null
          montant_paye_cdf?: number | null
          montant_paye_usd?: number | null
          notes?: string | null
          reference_paiement?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'paiements_cotisations_cotisation_evenement_id_fkey'
            columns: ['cotisation_evenement_id']
            isOneToOne: false
            referencedRelation: 'cotisations_evenements'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'paiements_cotisations_membre_id_fkey'
            columns: ['membre_id']
            isOneToOne: false
            referencedRelation: 'membres'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'paiements_cotisations_membre_id_fkey'
            columns: ['membre_id']
            isOneToOne: false
            referencedRelation: 'vue_stats_presences'
            referencedColumns: ['membre_id']
          },
          {
            foreignKeyName: 'paiements_cotisations_membre_id_fkey'
            columns: ['membre_id']
            isOneToOne: false
            referencedRelation: 'vue_suivi_cotisations'
            referencedColumns: ['membre_id']
          },
        ]
      }
      presences: {
        Row: {
          created_at: string | null
          id: string
          membre_id: string | null
          motif_absence: string | null
          notes: string | null
          repetition_id: string | null
          statut: Database['public']['Enums']['statut_presence_enum']
        }
        Insert: {
          created_at?: string | null
          id?: string
          membre_id?: string | null
          motif_absence?: string | null
          notes?: string | null
          repetition_id?: string | null
          statut: Database['public']['Enums']['statut_presence_enum']
        }
        Update: {
          created_at?: string | null
          id?: string
          membre_id?: string | null
          motif_absence?: string | null
          notes?: string | null
          repetition_id?: string | null
          statut?: Database['public']['Enums']['statut_presence_enum']
        }
        Relationships: [
          {
            foreignKeyName: 'presences_membre_id_fkey'
            columns: ['membre_id']
            isOneToOne: false
            referencedRelation: 'membres'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'presences_membre_id_fkey'
            columns: ['membre_id']
            isOneToOne: false
            referencedRelation: 'vue_stats_presences'
            referencedColumns: ['membre_id']
          },
          {
            foreignKeyName: 'presences_membre_id_fkey'
            columns: ['membre_id']
            isOneToOne: false
            referencedRelation: 'vue_suivi_cotisations'
            referencedColumns: ['membre_id']
          },
          {
            foreignKeyName: 'presences_repetition_id_fkey'
            columns: ['repetition_id']
            isOneToOne: false
            referencedRelation: 'repetitions'
            referencedColumns: ['id']
          },
        ]
      }
      repetitions: {
        Row: {
          created_at: string | null
          date_repetition: string
          id: string
          lieu: string | null
          notes: string | null
          statut: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date_repetition: string
          id?: string
          lieu?: string | null
          notes?: string | null
          statut?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date_repetition?: string
          id?: string
          lieu?: string | null
          notes?: string | null
          statut?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      simple_contact: {
        Row: {
          id: number
          name: string
          phone: string | null
        }
        Insert: {
          id?: number
          name: string
          phone?: string | null
        }
        Update: {
          id?: number
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      transactions_caisse: {
        Row: {
          compte_caisse_id: string | null
          created_at: string | null
          created_by: string | null
          date_transaction: string | null
          description: string
          id: string
          membre_id: string | null
          montant: number
          notes: string | null
          piece_justificative_url: string | null
          reference: string | null
          type_operation: string
          type_transaction_id: string | null
        }
        Insert: {
          compte_caisse_id?: string | null
          created_at?: string | null
          created_by?: string | null
          date_transaction?: string | null
          description: string
          id?: string
          membre_id?: string | null
          montant: number
          notes?: string | null
          piece_justificative_url?: string | null
          reference?: string | null
          type_operation: string
          type_transaction_id?: string | null
        }
        Update: {
          compte_caisse_id?: string | null
          created_at?: string | null
          created_by?: string | null
          date_transaction?: string | null
          description?: string
          id?: string
          membre_id?: string | null
          montant?: number
          notes?: string | null
          piece_justificative_url?: string | null
          reference?: string | null
          type_operation?: string
          type_transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'transactions_caisse_compte_caisse_id_fkey'
            columns: ['compte_caisse_id']
            isOneToOne: false
            referencedRelation: 'comptes_caisse'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transactions_caisse_compte_caisse_id_fkey'
            columns: ['compte_caisse_id']
            isOneToOne: false
            referencedRelation: 'vue_solde_caisse'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transactions_caisse_created_by_fkey'
            columns: ['created_by']
            isOneToOne: false
            referencedRelation: 'membres'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transactions_caisse_created_by_fkey'
            columns: ['created_by']
            isOneToOne: false
            referencedRelation: 'vue_stats_presences'
            referencedColumns: ['membre_id']
          },
          {
            foreignKeyName: 'transactions_caisse_created_by_fkey'
            columns: ['created_by']
            isOneToOne: false
            referencedRelation: 'vue_suivi_cotisations'
            referencedColumns: ['membre_id']
          },
          {
            foreignKeyName: 'transactions_caisse_membre_id_fkey'
            columns: ['membre_id']
            isOneToOne: false
            referencedRelation: 'membres'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transactions_caisse_membre_id_fkey'
            columns: ['membre_id']
            isOneToOne: false
            referencedRelation: 'vue_stats_presences'
            referencedColumns: ['membre_id']
          },
          {
            foreignKeyName: 'transactions_caisse_membre_id_fkey'
            columns: ['membre_id']
            isOneToOne: false
            referencedRelation: 'vue_suivi_cotisations'
            referencedColumns: ['membre_id']
          },
          {
            foreignKeyName: 'transactions_caisse_type_transaction_id_fkey'
            columns: ['type_transaction_id']
            isOneToOne: false
            referencedRelation: 'types_transactions'
            referencedColumns: ['id']
          },
        ]
      }
      types_transactions: {
        Row: {
          categorie: string
          created_at: string | null
          description: string | null
          id: string
          nom: string
        }
        Insert: {
          categorie: string
          created_at?: string | null
          description?: string | null
          id?: string
          nom: string
        }
        Update: {
          categorie?: string
          created_at?: string | null
          description?: string | null
          id?: string
          nom?: string
        }
        Relationships: []
      }
    }
    Views: {
      vue_solde_caisse: {
        Row: {
          devise: Database['public']['Enums']['devise_enum'] | null
          id: string | null
          solde: number | null
          symbole: string | null
          updated_at: string | null
        }
        Insert: {
          devise?: Database['public']['Enums']['devise_enum'] | null
          id?: string | null
          solde?: number | null
          symbole?: never
          updated_at?: string | null
        }
        Update: {
          devise?: Database['public']['Enums']['devise_enum'] | null
          id?: string | null
          solde?: number | null
          symbole?: never
          updated_at?: string | null
        }
        Relationships: []
      }
      vue_stats_presences: {
        Row: {
          absences: number | null
          excuses: number | null
          membre_id: string | null
          nom: string | null
          prenom: string | null
          presences: number | null
          taux_presence: number | null
          total_repetitions: number | null
        }
        Relationships: []
      }
      vue_suivi_cotisations: {
        Row: {
          categorie: string | null
          evenement: string | null
          membre_id: string | null
          montant_paye_cdf: number | null
          montant_paye_usd: number | null
          montant_requis_cdf: number | null
          montant_requis_usd: number | null
          nom: string | null
          prenom: string | null
          progression_pourcentage: number | null
          reste_cdf: number | null
          reste_usd: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      devise_enum: 'USD' | 'CDF'
      statut_presence_enum: 'Présent' | 'Absent' | 'Excusé'
      voix_enum: 'Soprano' | 'Tenor' | 'Basse' | 'Alto'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
      schema: keyof DatabaseWithoutInternals
    }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
      DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
      DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
      schema: keyof DatabaseWithoutInternals
    }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
      schema: keyof DatabaseWithoutInternals
    }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
      schema: keyof DatabaseWithoutInternals
    }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
      schema: keyof DatabaseWithoutInternals
    }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      devise_enum: ['USD', 'CDF'],
      statut_presence_enum: ['Présent', 'Absent', 'Excusé'],
      voix_enum: ['Soprano', 'Tenor', 'Basse', 'Alto']
    }
  }
} as const;
