export class Transaction {
	id: number;
	representative_id: number;
	amount:number;
	due_date: string;
	customer_name: string;
	wtp: string;
	notes: string;
	created_at: string;
	updated_at: string;
}

/**
 *     protected $fillable = ['id', 'representative_id','amount','due_date','customer_name','wtp','notes'];

 */