import { Timestamp } from 'rxjs';

export class Reimbursement {
    reimb_id: number;
    amount: number;
    submitted: Timestamp<any>;
    resolved: Timestamp<any>;
    description: string;
    receipt: string;
    explaination: string;
    resolver_id: number;
    author_id: number;
    status_id: number;
    type_id: number;
}